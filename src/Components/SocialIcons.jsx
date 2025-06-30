// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const SocialIcons = () => {
    return (
        <div className="flex gap-4 items-center justify-center lg:justify-start">
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                <Link to="https://github.com/anik-siddiky" target="_blank" className="hover:text-[#A87914] transition text-3xl">
                    <FaGithub />
                </Link>
            </motion.div>

            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                <Link to="https://www.linkedin.com/in/anik-siddiky" target="_blank" className="hover:text-[#A87914] transition text-3xl">
                    <FaLinkedin />
                </Link>
            </motion.div>

            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                <Link to="https://x.com/codesbynik" target="_blank" className="hover:text-[#A87914] transition text-3xl">
                    <FaSquareXTwitter />
                </Link>
            </motion.div>

            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                <Link to="https://www.facebook.com/dev.anik.siddiky" target="_blank" className="hover:text-[#A87914] transition text-3xl">
                    <FaFacebookSquare />
                </Link>
            </motion.div>
        </div>
    );
};

export default SocialIcons;