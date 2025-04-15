import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
    {
        question: 'What is a FAQ?',
        answer: 'A FAQ is a list of frequently asked questions and answers on a particular topic.',
    },
    {
        question: 'What is the purpose of a FAQ?',
        answer: 'The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.',
    },
    {
        question: 'How do I create a FAQ?',
        answer: 'To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.',
    },
    {
        question: 'What are the benefits of a FAQ?',
        answer: 'The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.',
    },
];

export default function FAQ() {
    return (
        <section className="padding-x padding-y bg-gray-100">
            <div className="container !max-w-3xl">
                <h2 className="mb-4 text-3xl font-semibold text-pretty md:mb-6 md:text-4xl lg:mb-8 lg:max-w-3xl lg:text-5xl font-amuly mx-auto text-center">
                    Frequently asked questions
                </h2>
                <Accordion type="single" collapsible>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="font-semibold hover:no-underline font-amulya md:text-lg lg:text-xl cursor-pointer">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
