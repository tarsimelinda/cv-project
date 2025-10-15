import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { classNames } from './utils';

export default function ProfileDropdown() {
    return (
        <Menu as="div" className="relative ml-3">
            <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="sr-only">Open user menu</span>
                <img
                    alt="Profile"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10">
                {['Your profile', 'Settings', 'Sign out'].map((item) => (
                    <MenuItem key={item}>
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-white/5' : '',
                                    'block px-4 py-2 text-sm text-gray-300'
                                )}
                            >
                                {item}
                            </a>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
}
