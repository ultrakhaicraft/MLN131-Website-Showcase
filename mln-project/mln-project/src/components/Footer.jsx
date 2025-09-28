import { motion as Motion } from "framer-motion";
import Fb from "@/assets/fb.png";
import Ig from "@/assets/ig.png";
import X from "@/assets/x.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-6 mt-12">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} MLN</p>
        <div className="flex gap-4">
          {[{img:Fb,alt:"Facebook"},{img:Ig,alt:"Instagram"},{img:X,alt:"Twitter"}].map(({img,alt},i)=>(
            <Motion.img
              key={i}
              src={img}
              alt={alt}
              className="w-5 h-5 cursor-pointer"
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
