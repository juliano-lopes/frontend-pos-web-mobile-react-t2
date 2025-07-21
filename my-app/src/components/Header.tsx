import React, { useState } from 'react';

interface HeaderProps {
    systemName: string;
    welcomeMessage?: string;
}

const Header: React.FC<HeaderProps> = ({ systemName, welcomeMessage }) => {
    const [activeLink, setActiveLink] = useState<string>('#sobre');

    const handleNavLinkClick = (href: string) => {
        setActiveLink(href);

        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                            <a
                                className={`nav-link ${activeLink === '#sobre' ? 'active' : ''}`}
                                aria-current={activeLink === '#sobre' ? 'page' : undefined}
                                href="#sobre"
                                onClick={() => handleNavLinkClick('#sobre')}
                            >
                                Sobre o Projeto
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === '#objetivos' ? 'active' : ''}`}
                                aria-current={activeLink === '#objetivos' ? 'page' : undefined}
                                href="#objetivos"
                                onClick={() => handleNavLinkClick('#objetivos')}
                            >
                                Objetivos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === '#contato' ? 'active' : ''}`}
                                aria-current={activeLink === '#contato' ? 'page' : undefined}
                                href="#contato"
                                onClick={() => handleNavLinkClick('#contato')}
                            >
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