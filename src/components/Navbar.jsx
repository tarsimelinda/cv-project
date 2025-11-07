import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../css/navbar.css'

const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Message', href: '#message' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    return (
        <Disclosure as="nav" className="navbar">
            <div className="navbar-container">
                <div className="navbar-inner">
                    <div className="mobile-menu-button">
                        <DisclosureButton className="mobile-toggle group">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="menu-icon-open block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="menu-icon-close hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>

                    <div className="desktop-wrapper">
                        <a href="#home" className="navbar-logo" aria-label="Go to home">
                            <img
                                alt="Personal logo (Letter M)"
                                src="/letter-m.png"
                                className="logo-image"
                                width={32}
                                height={32}
                                decoding="async"
                                fetchpriority="high"
                            />
                        </a>

                        <div className="desktop-nav">
                            {navigationItems.map((item) => (
                                <a key={item.name} href={item.href} className="nav-link">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="mobile-menu">
                <div className="mobile-menu-items">
                    {navigationItems.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="mobile-link"
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
