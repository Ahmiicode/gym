import {motion} from "framer-motion";


export default function Button({children}){


return(

<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

className="
px-8 py-3
rounded-full
bg-yellow-500
text-black
font-semibold
shadow-xl
"

>

{children}

</motion.button>


)

}