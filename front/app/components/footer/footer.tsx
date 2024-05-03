import Image from 'next/image';
import styles from './footer.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <h1>Atendimento ao Cliente</h1>
                <ul>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Central de Ajuda
                        </a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Como comprar
                        </a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Devolução e Reembolso
                        </a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Fale Conosco
                        </a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Cookies
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h1>Institucional</h1>
                <ul>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Sobre a Rezon
                        </a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Trabalhe Conosco
                        </a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Nossas Lojas
                        </a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Investidores
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.pagamento}>
                <h1>Pagamento</h1>
                <ul>
                    <li>
                        <Image
                            src="https://down-br.img.susercontent.com/file/95d849253f75d5e6e6b867af4f7c65aa"
                            alt="mastercard" width={52} height={22} />

                    </li>
                    <li>
                        <Image
                            src="https://down-br.img.susercontent.com/file/a65c5d1c5e556c6197f8fbd607482372"
                            alt="visa" width={52} height={22} />
                    </li>
                    <li>
                        <Image
                            src="https://down-br.img.susercontent.com/file/5ee8fb5f33fdf1e42ea32b86f47f54c4"
                            alt="hipercard" width={52} height={22} />
                    </li>
                    <li>
                        <Image
                            src="https://down-br.img.susercontent.com/file/2d091a1c189e8e4c529a73f3ec3a118d"
                            alt="elo" width={52} height={22} />
                    </li>
                    <li>
                        <Image
                            src="https://down-br.img.susercontent.com/file/285e5ab6207eb562a9e893a42ff7ee46"
                            alt="amex" width={52} height={22} />
                    </li>
                    <li>
                        <Image
                            src="https://down-br.img.susercontent.com/file/44734b7fc343eb46237c2d90c6c9ca60"
                            alt="boleto" width={52} height={22} />
                    </li>
                    <li>
                        <Image
                            src="https://down-br.img.susercontent.com/file/2a2cfeb34b00ef7b3be23ea516dcd1c5"
                            alt="pix" width={52} height={22} />
                    </li>
                </ul>
            </div>
            <div className={styles.media}>
                <h1>Siga-nos</h1>
                <ul>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FaTiktok size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/alberto-vargas-carneiro/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/alberto-vargas-carneiro" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={25} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}