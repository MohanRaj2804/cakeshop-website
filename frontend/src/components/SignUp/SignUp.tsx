import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from '../../services/api';
import { useAuth } from '../../context/useAuth';

function SignUp() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.register(formData);
            if (res.message) {
                // automatically log the user in after successful registration
                try {
                    const loginRes = await api.login({
                        email: formData.email,
                        password: formData.password,
                    });
                    if (loginRes.token) {
                        login(loginRes.user, loginRes.token);
                        setMessage('Registration successful! Redirecting...');
                        navigate('/');
                        return;
                    } else {
                        setMessage(loginRes.message || 'Registered but login failed');
                        // still redirect to signin after short delay
                        setTimeout(() => navigate('/signin'), 1200);
                        return;
                    }
                } catch (loginErr) {
                    console.error('Auto login error:', loginErr);
                    setMessage('Registered but unable to log in automatically.');
                    setTimeout(() => navigate('/signin'), 1200);
                    return;
                }
            } else {
                setMessage('Registration failed');
            }
        } catch (error) {
            console.error('Signup error:', error);
            setMessage('Signup failed. See console for details.');
        }
    };

    return (
        <>
            <section className="py-3 py-md-5 py-xl-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-5">
                                <h2 className="display-5 fw-bold text-center">Sign up</h2>
                                {message && <p className="text-center text-primary">{message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="row gy-5 justify-content-center">
                                <div className="col-12 col-lg-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control border-0 border-bottom rounded-0"
                                                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                        placeholder="Full Name" required />
                                                    <label className="form-label">Full Name</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control border-0 border-bottom rounded-0"
                                                        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                        placeholder="Email" required />
                                                    <label className="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control border-0 border-bottom rounded-0"
                                                        value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
                                                        placeholder="Password" required />
                                                    <label className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn-clr-3 btn-lg btn-dark rounded-6 fs-6" type="submit">Sign up</button>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-center m-0">Already have an account? <Link to='/signin'>Sign in</Link></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
