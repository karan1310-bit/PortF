import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { slideUp } from '../utils/anim'

const Loader = () => {

    const [index, setIndex] = useState(0)
    const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

    useEffect(() => {
        if(index == words.length - 1) return;

        setTimeout(() => {
            setIndex(index + 1);
        },
        index == 0 ? 1000 : 150
    );
    }, [index])

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit"
    className = "h-[100vh] w-[100vw] flex items-center justify-center text-white bg-[#141516] fixed top-0 left-0 z-[99]"
    >
        <p className='text-2xl'>{words[index]}</p>
    </motion.div>
  )
}

export default Loader