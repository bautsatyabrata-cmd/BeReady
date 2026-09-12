function Footer() {

    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">
                    <div className="footer-logo">
                        <span>⚡</span>
                        <strong>BeReady</strong>
                    </div>

                    <p>
                        Prepare smarter. Practice better. Be ready for your placement.
                    </p>
                </div>


                <div className="footer-links">

                    <a
                        href="https://satyabrata-dev.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Portfolio
                    </a>

                    <a
                        href="https://github.com/bautsatyabrata-cmd"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                </div>

            </div>


            <div className="footer-bottom">

                <span>
                    © 2026 BeReady. All rights reserved.
                </span>

                <span>
                    Built by{" "}
                    <a
                        href="https://satyabrata-dev.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Satyabrata Baut
                    </a>
                </span>

            </div>


            <style>{`

                .footer {
                    width: 100%;
                    margin-top: 50px;
                    background: #172033;
                    color: #ffffff;
                }

                .footer-content {
                    max-width: 1380px;
                    margin: 0 auto;
                    padding: 35px 40px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                }

                .footer-logo {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    margin-bottom: 8px;
                }

                .footer-logo span {
                    width: 32px;
                    height: 32px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 7px;
                    background: #ffffff;
                    color: #172033;

                    font-size: 16px;
                }

                .footer-logo strong {
                    font-size: 18px;
                    font-weight: 800;
                }

                .footer-brand p {
                    margin: 0;
                    color: #98a2b3;
                    font-size: 12px;
                    line-height: 1.6;
                }

                .footer-links {
                    display: flex;
                    align-items: center;
                    gap: 25px;
                }

                .footer-links a {
                    color: #cbd5e1;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 600;
                    transition: color .2s ease;
                }

                .footer-links a:hover {
                    color: #ffffff;
                }

                .footer-bottom {
                    max-width: 1380px;
                    margin: 0 auto;

                    padding: 16px 40px;

                    border-top: 1px solid rgba(255, 255, 255, .10);

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;

                    color: #98a2b3;
                    font-size: 11px;
                }

                .footer-bottom a {
                    color: #ffffff;
                    text-decoration: none;
                    font-weight: 600;
                }

                .footer-bottom a:hover {
                    text-decoration: underline;
                }

                @media (max-width: 600px) {

                    .footer-content {
                        padding: 28px 18px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                    }

                    .footer-links {
                        gap: 20px;
                    }

                    .footer-bottom {
                        padding: 15px 18px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 6px;
                    }

                }

            `}</style>

        </footer>
    );
}

export default Footer;