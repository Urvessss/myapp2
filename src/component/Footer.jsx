import React from 'react';

const Footer = () => {

    return (
        <div>
            <footer class="py-2 sticky-bottom bg-dark text-secondary">
                <div class="container text-center">
                    Copyright &copy; {(new Date().getFullYear())} Capgemini
                </div>
            </footer>
        </div>

    );
}
export default Footer;