import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function AboutMe() {
    return (
        <section id="about-me" className="padding-x padding-y">
            <div className="container mx-auto flex flex-col items-center gap-16 lg:flex-row lg:gap-12 justify-evenly">
                <figure className="max-w-md shrink-0 overflow-hidden relative shadow-md rounded-md">
                    <Image
                        src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1744614881/ov1x3zjlnkuyyo9voceb.jpg"
                        alt="Photo Editor"
                        width={500}
                        height={600}
                        priority
                        className="object-cover"
                    />
                </figure>

                <div className="flex-1 max-w-2xl">
                    <Badge className="mb-4" variant={'outline'}>
                        About Me
                    </Badge>
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl font-amulya">
                        Meet The Photo Editing Expert
                    </h2>

                    <div className="text-muted-foreground leading-relaxed space-y-4 text-base md:text-lg">
                        <p>
                            Hi! I’m{' '}
                            <strong className="text-primary">
                                MD Ashaduzzaman
                            </strong>
                            , a master photo editor with over{' '}
                            <strong>10 years</strong> of transforming ordinary
                            images into visual masterpieces. As the{' '}
                            <strong>CEO and Founder</strong> of Web Briks LLC
                            and Clipping Path Action, I lead a team dedicated to
                            visual excellence.
                        </p>
                        <p>
                            I specialize in precision clipping paths, flawless
                            background removal, professional retouching, and
                            creative photo manipulation that makes products pop
                            and stories come alive.
                        </p>
                        <p>
                            Top eCommerce brands, photographers, and studios
                            trust my expertise to elevate their visual content
                            with <strong>pixel-perfect precision</strong>,
                            lightning-fast turnaround, and obsessive attention
                            to detail.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
