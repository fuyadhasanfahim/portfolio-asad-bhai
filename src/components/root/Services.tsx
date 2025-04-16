import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

const services = [
    {
        id: 'services-1',
        title: 'eCommerce Photo Editing Service',
        url: 'e-commerce-photo-editing-service',
        images: {
            beforeImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744777916/tzvocxv9gez8q8c1jefa.jpg',
                alt: 'eCommerce Photo Editing Service before image',
            },
            afterImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744777916/uifjcsgxdspbfh5fr2b9.jpg',
                alt: 'eCommerce Photo Editing Service before image',
            },
        },
    },
    {
        id: 'services-2',
        title: 'Clipping Path Service',
        url: 'clipping-path-service',
        images: {
            beforeImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744778241/dqr2nipwmqdesjbkdkhq.jpg',
                alt: 'Clipping Path Service before image',
            },
            afterImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744778241/giqzsbrlcmwrd8frnvp2.jpg',
                alt: 'Clipping Path Service before image',
            },
        },
    },
    {
        id: 'services-3',
        title: 'Image Masking Service',
        url: 'image-masking-service',
        images: {
            beforeImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744778937/kaheiil7vrco6vqdkn0q.jpg',
                alt: 'Image Masking Service before image',
            },
            afterImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744778937/w1pll5yedzn4wj4ogoit.jpg',
                alt: 'Image Masking Service before image',
            },
        },
    },
    {
        id: 'services-4',
        title: 'Shadow Creation Service',
        url: 'shadow-creation-service',
        images: {
            beforeImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744779343/ddbn2j7n8j9cx0xcpnqe.jpg',
                alt: 'Shadow Creation Service before image',
            },
            afterImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744779343/msy1i2anv6tho1tdbx1o.jpg',
                alt: 'Shadow Creation Service before image',
            },
        },
    },
    {
        id: 'services-5',
        title: 'Photo Retouching Service',
        url: 'photo-retouching-service',
        images: {
            beforeImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744782324/gmsfvoolp9yladnnbwup.jpg',
                alt: 'Photo Retouching Service before image',
            },
            afterImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744782323/lbzyo0jcybeilby9w6pg.jpg',
                alt: 'Photo Retouching Service before image',
            },
        },
    },
    {
        id: 'services-6',
        title: 'Ghost Mannequin Service',
        url: 'ghost-mannequin-service',
        images: {
            beforeImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744780523/wdkri9miwgfh6aontvu5.jpg',
                alt: 'Ghost Mannequin Service before image',
            },
            afterImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744780523/cjwwylx5ef9n6gh7il7f.jpg',
                alt: 'Ghost Mannequin Service before image',
            },
        },
    },
    {
        id: 'services-7',
        title: 'Color Correction Service',
        url: 'color-correction-service',
        images: {
            beforeImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744779668/xtbldn9yl2br49eabq6r.jpg',
                alt: 'Color Correction Service before image',
            },
            afterImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744779668/cl4q6glzubl8fiwpmhej.jpg',
                alt: 'Color Correction Service before image',
            },
        },
    },
    {
        id: 'services-8',
        title: 'Background Editing Service',
        url: 'background-editing-service',
        images: {
            beforeImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744780065/eogzgzgn7o4yjzzz7c1l.jpg',
                alt: 'Background Editing Service before image',
            },
            afterImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744780065/yh7kin2mfshqhyfga7vv.jpg',
                alt: 'Background Editing Service before image',
            },
        },
    },
    {
        id: 'services-9',
        title: 'Raster To Victor',
        url: 'raster-to-vector',
        images: {
            beforeImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744780065/eogzgzgn7o4yjzzz7c1l.jpg',
                alt: 'Background Editing Service before image',
            },
            afterImage: {
                url: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744780065/yh7kin2mfshqhyfga7vv.jpg',
                alt: 'Background Editing Service before image',
            },
        },
    },
];

export default function Services() {
    return (
        <section className="padding-x padding-y bg-gray-100" id="services">
            <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
                <div className="text-center">
                    <Badge variant="outline" className="mb-6">
                        Latest Updates
                    </Badge>
                    <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl font-amulya">
                        Photo editing services
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {services.map(({ title, url, images }, index) => (
                        <Card key={index} id={url}>
                            <CardHeader>
                                {
                                    <ReactCompareSlider
                                        itemOne={
                                            <ReactCompareSliderImage
                                                src={images.beforeImage.url}
                                                alt={images.beforeImage.alt}
                                            />
                                        }
                                        itemTwo={
                                            <ReactCompareSliderImage
                                                src={images.afterImage.url}
                                                alt={images.afterImage.alt}
                                            />
                                        }
                                        changePositionOnHover
                                        className="rounded-md"
                                    />
                                }
                            </CardHeader>
                            <CardContent>
                                <h3 className="text-lg text-center font-semibold md:text-xl">
                                    {title}
                                </h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
