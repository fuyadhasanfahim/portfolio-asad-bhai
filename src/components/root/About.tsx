import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutMe() {
    return (
        <section id="about-me" className="padding-x padding-y bg-muted/50">
            <div className="container mx-auto flex flex-col items-center gap-16 lg:flex-row lg:gap-12 justify-evenly">
                <figure className="max-w-md shrink-0 overflow-hidden relative shadow-md rounded-2xl">
                    <Image
                        src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                        alt="Photo Editor"
                        width={500}
                        height={600}
                        className="object-cover"
                        priority
                    />
                </figure>

                <div className="flex-1 max-w-2xl">
                    <Badge variant="secondary" className="mb-4">
                        About Me
                    </Badge>
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl font-amulya">
                        Meet The Photo Editing Expert
                    </h2>

                    <Card className="bg-background/70 shadow-md">
                        <CardContent className="p-6 text-muted-foreground leading-relaxed space-y-4 text-base md:text-lg">
                            <p>
                                Hi! I’m <strong>MD Ashaduzzaman</strong>, a
                                passionate photo editor with over{' '}
                                <strong>7 years</strong> of experience in
                                professional image editing. My expertise
                                includes clipping paths, background removal,
                                retouching, and advanced photo manipulation.
                            </p>
                            <p>
                                I help eCommerce brands, photographers, and
                                studios achieve perfection through precise edits
                                and a deep understanding of visual storytelling.
                            </p>
                            <p>
                                My goal is to deliver{' '}
                                <strong>pixel-perfect results</strong> with fast
                                turnaround and 100% client satisfaction. Let’s
                                bring your images to life!
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
