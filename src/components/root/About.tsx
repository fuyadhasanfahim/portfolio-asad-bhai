import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
// import Link from 'next/link';

export default function AboutMe() {
    return (
        <section id="about-me" className="padding-x padding-y bg-gray-100">
            <div className="container mx-auto flex flex-col items-center gap-16 lg:flex-row lg:gap-12 justify-evenly">
                <figure className="max-w-md shrink-0 overflow-hidden relative shadow-md rounded-2xl">
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
                        {/* <div>
                            <h4>
                                Ready to transform your images? Connect with me:
                            </h4>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <Link
                                    href="https://www.fiverr.com/cutoutexpertbd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                                >
                                    <span className="font-medium">Fiverr</span>
                                </Link>
                                <Link
                                    href="https://www.upwork.com/freelancers/asad4nur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors"
                                >
                                    <span className="font-medium">Upwork</span>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/asad4nur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                                >
                                    <span className="font-medium">
                                        LinkedIn
                                    </span>
                                </Link>
                                <Link
                                    href="https://webbriks.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors"
                                >
                                    <span className="font-medium">
                                        Web Briks LLC
                                    </span>
                                </Link>
                                <Link
                                    href="https://clippingpathaction.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
                                >
                                    <span className="font-medium">
                                        Clipping Path Action
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <p>
                            <em>
                                Let me bring your visual vision to life – where
                                every pixel matters and excellence is standard.
                            </em>
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
