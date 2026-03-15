import './SignIn.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/useAuth';

function SignIn() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.login(formData);
            console.log('Login response:', res);
            if (res.token) {
                // store user and token in context then navigate immediately
                login(res.user, res.token);
                setMessage("Login successful!");
                navigate('/');
            } else {
                setMessage(res.message || "Login failed");
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage("Login failed. Check console for details.");
        }
    };

    return (
        <>
            <section className="py-3 py-md-5 py-xl-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-5">
                                <h2 className="display-5 fw-bold text-center">Sign in</h2>
                                <p className="text-center m-0">Sign in to a world of sweetness.</p>
                                {message && <p className="text-center text-primary mt-2">{message}</p>}
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
                                                    <button className="btn-clr-3 btn-lg btn-dark rounded-6 fs-6" type="submit">Log in</button>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-center m-0">Don't have an account? <Link to='/signup'>Sign up</Link></p>
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

export default SignIn;