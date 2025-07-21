import React from 'react';

interface HeaderProps {
    systemName: string;
    welcomeMessage?: string;
}

const Header: React.FC<HeaderProps> = ({ systemName, welcomeMessage }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
                <a className="navbar-brand" href="#">
                    {systemName}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Alternar navegação"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {welcomeMessage && (
                        <span className="navbar-text text-white ms-auto me-3">
                            {welcomeMessage}
                        </span>
                    )}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#sobre">
                                Sobre o Projeto
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#objetivos">
                                Objetivos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contato">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;