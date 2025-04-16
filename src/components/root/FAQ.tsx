import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
    {
        question: 'What camera should I start with as a beginner?',
        answer: 'A good beginner camera is one that fits your budget and needs. DSLRs like the Canon EOS Rebel series or mirrorless cameras like the Sony Alpha series are popular choices for starters.',
    },
    {
        question: 'What’s the difference between RAW and JPEG?',
        answer: 'RAW files contain uncompressed data from your camera’s sensor, allowing for greater editing flexibility. JPEGs are compressed and ready-to-use but offer less control in post-processing.',
    },
    {
        question: 'How do I get sharp photos?',
        answer: 'Use a fast enough shutter speed, proper focus, and avoid camera shake by using a tripod or image stabilization. Good lighting and quality lenses also help improve sharpness.',
    },
    {
        question: 'What is the exposure triangle?',
        answer: 'The exposure triangle refers to the relationship between ISO, aperture, and shutter speed. Balancing these three settings controls how light or dark your photo is.',
    },
    {
        question: 'Do I need expensive gear to take good photos?',
        answer: 'Not at all. While high-end gear helps, understanding light, composition, and camera settings is far more important. Many stunning photos are taken with smartphones or entry-level gear.',
    },
    {
        question: 'How can I improve my photo composition?',
        answer: 'Follow techniques like the rule of thirds, leading lines, framing, and symmetry. Studying other photographers and practicing regularly also improves composition skills.',
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
