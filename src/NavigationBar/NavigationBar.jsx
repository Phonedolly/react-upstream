import React, { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
            {/* <Toggle onClick={() => setIsOpen(!isOpen)} />
            <Items /> */}
        </motion.nav>
    );
};

export default Nav;
