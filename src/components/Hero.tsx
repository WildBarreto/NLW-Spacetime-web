import Image from "next/image";
import Link from "next/link";
import nlwLogo from "../Assets/nlw-spacetime-logo.svg";

export default function Hero() {
  return (
    <div className="space-y-5 ">
      <Image src={nlwLogo} alt="NLW Spacetime" />
      <div className="max-w-[420px] space-y-1">
        <h1 className=" text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecionar momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        href="/mories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇAS
      </Link>
    </div>
  );
}
