import { Categoria } from "../models/categoria.enum";
import { Noticia } from "../models/noticia.model";

export const NOTICIAS: Noticia[] = [
  {
    titulo: "Campanha de Malware Sofisticado Detectada em Empresas",
    subTitulo: "Ameaça de Vírus Sofisticado em Empresas de Tecnologia",
    corpo: "Pesquisadores de segurança identificaram uma nova campanha de malware direcionada a empresas de tecnologia. O código malicioso se propaga através de anexos de email e compromete credenciais de usuários.",
    autor: "Equipe de Segurança",
    slug: "campanha-malware-sofisticado",
    categoria: Categoria.ATAQUE,
    criadoEm: new Date("2026-03-01"),
    atualizadoEm: new Date("2026-03-01"),
    urlImagem: "https://surfshark.com/wp-content/uploads/2022/09/What-is-Malware_-How-does-it-work-and-how-to-protect-yourself_-1024x501.png"
  },
  {
    titulo: "Trojan Bancário Ativo em Transações Financeiras",
    subTitulo: "Ataque de Trojan Bancário Capturando Credenciais",
    corpo: "Um Trojan bancário foi detectado capturando credenciais de contas bancárias. Usuários dos sistemas operacionais Windows e macOS foram os principais afetados pela ameaça.",
    autor: "Centro de Resposta a Incidentes",
    slug: "trojan-bancario-ativo",
    categoria: Categoria.ATAQUE,
    criadoEm: new Date("2026-02-28"),
    atualizadoEm: new Date("2026-02-28"),
    urlImagem: "https://www.notebookcheck.info/fileadmin/_processed_/webp/Notebooks/News/_nc5/android_exploit_malware_hack-q82-w2560-h.webp"
  },
  {
    titulo: "Variante de Malware Evasivo Contorna Antivírus",
    subTitulo: "Variante de Malware Evasivo com Técnicas Avançadas",
    corpo: "Analistas descobriram uma variante de malware que utiliza técnicas avançadas de ofuscação para contornar soluções antivírus tradicionais. A ameaça mantém persistência no sistema após a infecção inicial.",
    autor: "Laboratório de Análise de Ameaças",
    slug: "malware-evasivo-antivirus",
    categoria: Categoria.ATAQUE,
    criadoEm: new Date("2026-02-27"),
    atualizadoEm: new Date("2026-02-27"),
    urlImagem: "https://www.csoonline.com/wp-content/uploads/2024/04/security_risk_assessment_analysis_vulnerability_danger_thinkstock_902893076-100750007-orig.jpg?quality=50&strip=all&w=1024"
  }
]