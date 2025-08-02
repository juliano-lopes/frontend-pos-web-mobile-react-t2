import type { AccessibilityResource } from "../types/resources";

export const initialResources: AccessibilityResource[] = [
    {
        id: '1',
        name: 'TalkBack',
        type: 'Ferramenta',
        description: 'Leitor de tela do Google para Android, fornece feedback falado.',
        link: 'https://support.google.com/accessibility/android/answer/6007100?hl=pt-BR',
    },
    {
        id: '2',
        name: 'Acessibilidade com o Botão Interruptor',
        type: 'Ferramenta',
        description: 'Permite interagir com o dispositivo usando um ou mais interruptores.',
        link: 'https://support.google.com/accessibility/android/answer/6122836?hl=pt',
    },
    {
        id: '3',
        name: 'Android Accessibility API',
        type: 'API',
        description: 'APIs nativas do Android para desenvolver apps mais acessíveis.',
        link: 'https://developer.android.com/guide/topics/ui/accessibility?hl=pt-br',
    },
    {
        id: '4',
        name: 'Acesso por voz',
        type: 'Ferramenta',
        description: 'Permite controlar seu dispositivo com comandos de voz.',
        link: 'https://support.google.com/accessibility/android/answer/6151848?hl=pt',
    },
    {
        id: '5',
        name: 'Accessibility Scanner',
        type: 'Ferramenta',
        description: 'Ferramenta do Google que sugere melhorias de acessibilidade para apps Android.',
        link: 'https://support.google.com/accessibility/android/answer/6376570?hl=pt',
    },
];
