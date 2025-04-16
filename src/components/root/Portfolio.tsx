import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';
import PortfolioButton from '../shared/PortfolioButton';

const portfolioImages = [
    {
        images: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744784608/ozbpwfjdatx3mqm0jb5i.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785172/rpt1sonbrmqlrwgmsunu.jpg',
        },
    },
    {
        images: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785171/cj4lnhujrwiyvjqs45ou.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785169/lmuwzv1etpmoancdfsuc.jpg',
        },
    },
    {
        images: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785169/mw73jvzegtwfibwg7155.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785167/hyimamcuf6ssjuvdiizc.jpg',
        },
    },
    {
        images: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785166/d81hjyysgqkjzrs1ewr4.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785165/yykzvccojlfg0zk2xjga.jpg',
        },
    },
    {
        images: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785164/tbnj5dv8wsz6nph1yf8u.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785162/lut0xxsjnmeso9e4moma.jpg',
        },
    },
    {
        images: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785161/gb1px1zxsw7oayo24jkx.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785160/sp6ilxmrzhrdyj77shya.jpg',
        },
    },
    {
        images: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785159/nqmdaymij9suan05fbca.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785158/brlreficgzj2gklmftwl.jpg',
        },
    },
    {
        images: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785157/ugahm1c7j2h4ukoxoafc.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785155/llocfkicbfpkr4ng2pww.jpg',
        },
    },
    {
        images: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785155/xwy6nxxkklu0eyj3opwy.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744785153/bpodbmk4gpwa1gu7ngli.jpg',
        },
    },
];

export default function Portfolio() {
    return (
        <section className="padding-x padding-y" id="portfolio">
            <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
                <div className="text-center">
                    <Badge variant="secondary" className="mb-6">
                        Latest Updates
                    </Badge>
                    <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl font-amulya">
                        Portfolio Image
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {portfolioImages.map(({ images }, index) => (
                        <Card key={index}>
                            <CardContent>
                                <figure className="relative">
                                    <ReactCompareSlider
                                        itemOne={
                                            <ReactCompareSliderImage
                                                src={images.before}
                                                alt="before image"
                                            />
                                        }
                                        itemTwo={
                                            <ReactCompareSliderImage
                                                src={images.after}
                                                alt="after image"
                                            />
                                        }
                                        changePositionOnHover
                                        className="rounded-md"
                                    />
                                </figure>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <PortfolioButton />
            </div>
        </section>
    );
}
