import logo from "../assets/imgs/logo/logo.png";
import solidLogo from "../assets/imgs/logo/logo.png";
import heroImg from "../assets/imgs/hero/lawHero.jpg";
import bgHeroImg from "../assets/imgs/hero/bgHero.webp";

import imgFeatures from "../assets/imgs/features/imgServices.jpg";
import imgDivisor from "../assets/imgs/features/imgDivisor.jpg";

import aboutImg1 from "../assets/imgs/about/aboutImg.jpg";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.png";

import imgSteps from "../assets/imgs/steps/imgSteps.jpg";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/imgFeatures1.jpg";
import featuresImg2 from "../assets/imgs/features/imgFeatures2.jpg";
import featuresImg3 from "../assets/imgs/features/imgFeatures3.jpg";
import featuresImg4 from "../assets/imgs/features/imgFeatures4.jpg";

import imgFeaturesCardModal1 from "../assets/imgs/features/imgFeaturesCardModal1.png";
import imgFeaturesCardModal2 from "../assets/imgs/features/imgFeaturesCardModal2.png";
import imgFeaturesCardModal3 from "../assets/imgs/features/imgFeaturesCardModal3.png";
import imgFeaturesCardModal4 from "../assets/imgs/features/imgFeaturesCardModal4.png";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/deposition1.png";
import imgTestimonial2 from "../assets/imgs/testimonials/deposition2.png";
import imgTestimonial3 from "../assets/imgs/testimonials/deposition3.png";
import imgTestimonial4 from "../assets/imgs/testimonials/deposition4.png";

import {
  Calculator,
  User,
  House,
  Briefcase,
  HardHat,
  CircleUserRound,
} from "lucide-react";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "Dr. Artur Nascimento",
  email: "contato", // Email desejado pelo cliente
  domain: "fnascimentoadvocacia.com.br", // Sem "www"
  phone: {
    ddd: "92",
    firstPart: "98806", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "5906", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>Avenida Major Gabriel, nº 768 - Centro</p>
      <p>Manaus - AM</p>
      <p>CEP 69020-405</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Horário de Expediente:</p>
      <p>Segunda a Sexta-feira</p>
      <p>Das 8h às 17h</p>
    </div>
  ),
  obs: <span className="italic">A Definir</span>,
  instagramProfile: "A Definir", // Sem o @
  facebookProfile: "A Definir",
  linkeDinProfile: "A Definir",
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  slogan: "",
};

const content = {
  texts: {
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      adress: infos.endereco,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
    },
    navbar: {
      logo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: solidLogo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: ["Início", "Serviços", "Sobre Nós", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: (
        <p>
          ADVOGADO ADMINISTRATIVO E CÍVEL EM <br className="phone3:hidden" />
          MANAUS - AM
        </p>
      ),
      title: (
        <h1 className="mb-[16px]">
          Especializados em <span className="text-primary">resolver</span> seus
          problemas
        </h1>
      ),
      subtitle:
        "Mas de uma década de atuação jurídica dedicada a encontrar soluções eficientes e seguras para nossos clientes.",
      heroImg: heroImg,
      ctaButtonText: "Entre em contato",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A Definir",
      images: {
        background: bgHeroImg,
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    features: {
      miniTag: "ESPECIALIDADES",
      title: "Transformando conflitos em soluções",
      subtitle:
        "Com ênfase em diversas áreas nossa experiência garante estratégias jurídicas precisas para resolver desafios complexos",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg1,
        title: "Administrativo",
        subtitle:
          "Defesa em processos administrativos e gestão de demandas com órgãos públicos.",
        description: (
          <div>
            A Definir <br />
            <br />A Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal1,
        icon: <Calculator />,
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
      card2: {
        img: featuresImg2,
        title: "Cível",
        subtitle:
          "Resolução de disputas contratuais, patrimoniais e de responsabilidade civil.",
        description: (
          <div>
            A Definir <br />
            A Definir <br />
            <br />A Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal2,
        icon: <User />,
        buttonLabelModal: "Ortodontia",
        buttonLabel:
          "Correção da posição dos dentes e mandíbulas para um sorriso alinhado e saudável.",
      },
      card3: {
        img: featuresImg3,
        title: "Trabalhista",
        subtitle:
          "Assessoria em questões trabalhistas para empresas e empregados.",
        description: (
          <div>
            A Definir <br />
            <br />A Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal3,
        icon: <HardHat />,
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
      card4: {
        img: featuresImg4,
        title: "Imobiliário",
        subtitle:
          "Consultoria em compra, venda, locação e regularização de imóveis urbanos e rurais.",
        description: (
          <div>
            A Definir <br />
            <br />
            A Definir <br />
            A Definir <br />
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: <House />,
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem ilustrativa de escritório",
      },
      miniTag: "QUEM É DR. ARTUR NASCIMENTO",
      title: "Minha trajetória",
      subtitle:
        "Uma jornada dedicada à justiça e à transformação de vidas através da advocacia.",
      paragraph: (
        <div>
          A decisão de seguir a carreira jurídica foi influenciada por diversos
          fatores. Desde jovem, sempre tive um forte senso de justiça e um
          desejo ardente de fazer a diferença na vida das pessoas. A advocacia
          me pareceu o caminho perfeito para unir essa vocação com minha
          habilidade natural para argumentação e resolução de problemas
          complexos.
          <br />
          Durante minha graduação, tive a oportunidade de estagiar em
          escritórios de advocacia de prestígio e participar de projetos de
          assistência jurídica gratuita. Essas experiências solidificaram minha
          convicção de que a advocacia era mais do que uma profissão para mim -
          era um chamado.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      titleModal: <strong>Minha trajetória</strong>,
      modal: (
        <p>
          <strong>
            Uma jornada dedicada à justiça e à transformação de vidas através da
            advocacia.
          </strong>
          <br />
          <br />
          A decisão de seguir a carreira jurídica foi influenciada por diversos
          fatores. Desde jovem, sempre tive um forte senso de justiça e um
          desejo ardente de fazer a diferença na vida das pessoas. A advocacia
          me pareceu o caminho perfeito para unir essa vocação com minha
          habilidade natural para argumentação e resolução de problemas
          complexos.
          <br />
          Durante minha graduação, tive a oportunidade de estagiar em
          escritórios de advocacia de prestígio e participar de projetos de
          assistência jurídica gratuita. Essas experiências solidificaram minha
          convicção de que a advocacia era mais do que uma profissão para mim -
          era um chamado.
          <br />
          <br />
          Após me formar, iniciei minha carreira em varias empresas de São Paulo
          algumas delas na Faria Lima. Lá, pude aprimorar minhas habilidades e
          ganhar uma compreensão profunda dos desafios enfrentados por empresas
          de diversos setores. Com o tempo, expandi minha atuação para áreas
          como Direito Tributário e Contencioso Cível, sempre buscando oferecer
          soluções inovadoras e eficazes para meus clientes.
          <br />
          <br />
          O que realmente me motiva na advocacia é a oportunidade de ser um
          agente de transformação. Seja defendendo os direitos de um indivíduo
          ou orientando uma grande corporação em questões complexas, cada caso é
          uma chance de fazer justiça e contribuir para um sistema legal mais
          equitativo e eficiente.
          <br />
          <br />
          Ao longo dos anos, tive a honra de trabalhar em casos desafiadores que
          não apenas expandiram minha expertise, mas também tiveram impactos
          significativos na jurisprudência brasileira. Essa trajetória me
          ensinou que a advocacia é uma profissão de aprendizado contínuo, onde
          cada novo desafio é uma oportunidade de crescimento.
          <br />
          <br />
          Olhando para o futuro, estou entusiasmado com as possibilidades que a
          tecnologia traz para o campo jurídico. Acredito que a integração de
          ferramentas de inteligência artificial e análise de dados pode
          revolucionar a forma como praticamos o Direito, tornando-o mais
          acessível e eficiente.
          <br />
          <br />
          Em resumo, minha jornada na advocacia tem sido uma busca constante
          pela excelência e pelo impacto positivo. Cada dia traz novos desafios
          e oportunidades de aprendizado, e é isso que torna esta profissão tão
          gratificante e emocionante para mim.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocialImg,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "A Definir",
        title: "A Definir",
        subtitle: "A Definir",
        paragraph: <p>A Definir</p>,
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "FALE CONOSCO",
      title:
        "Enfrentando um problema jurídico? Deixe que cuidamos disso para você!",
      subtitle:
        "Converse com nossa equipe. Estamos prontos para oferecer a orientação jurídica de que você precisa.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
    },
    steps: {
      miniTag: "PASSO A PASSO",
      title: "Como funciona nosso processo de atendimento jurídico?",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Consulta inicial",
          cardDescription:
            "Realizamos uma reunião para entender seu caso e identificar suas necessidades jurídicas.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Análise detalhada",
          cardDescription:
            "Examinamos todos os aspectos do seu caso, revisando documentos e evidências para obter uma visão completa.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Elaboração da estratégia",
          cardDescription:
            "Criamos uma estratégia jurídica personalizada para proteger seus interesses de maneira eficaz.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Ação legal",
          cardDescription:
            "Iniciamos e conduzimos as ações judiciais necessárias, buscando a justiça e a solução de que você precisa.",
        },
      },
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas. ",
      questions: {
        question1: {
          question: "Como posso contratar seus serviços?",
          answer:
            "Agende uma consulta conosco via WhatsApp para discutirmos as necessidades da sua empresa e avaliarmos os custos envolvidos.",
        },
        question2: {
          question: "Qual é o prazo médio para resolução de um caso?",
          answer:
            "O prazo médio varia conforme a complexidade do caso, mas forneceremos uma estimativa detalhada durante a consulta inicial.",
        },
        question3: {
          question: "Quais documentos devo levar para a consulta?",
          answer:
            "Traga os documentos relevantes ao seu caso, como contratos sociais, documentos fiscais, contratos de prestação de serviços e quaisquer registros pertinentes, além de documentos de identificação dos representantes legais.",
        },
        question4: {
          question: "Vocês oferecem serviços de consultoria preventiva?",
          answer:
            "Sim, oferecemos consultoria preventiva para ajudar sua empresa a evitar litígios e garantir conformidade legal, promovendo segurança jurídica em suas operações.",
        },
      },
      paragraph: "Clique aqui caso tenha mais dúvidas",
    },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Até mais",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
    },
    testimonials: {
      miniTag: "A Definir",
      title: "A Definir",
      subtitle: "A Definir",
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
      },
    },
    trustedBy: {
      title: "A Definir",
      subtitle: "A Definir",
      trustedMore: {
        title: "A Definir",
        subtitle: "A Definir",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "marca Rennova",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "marca Colgate",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 7,
      number1Description: "A Definir",
      number2: 500,
      number2Description: "A Definir",
      number3: 1000,
      number3Description: "A Definir",
    },
    team: {
      title: "A Definir",
      subtitle: "A Definir",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
    },
  },
};

export default content;
