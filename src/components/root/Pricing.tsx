'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '../ui/separator';
import { CircleCheck } from 'lucide-react';
import Contact from '../shared/Contact';

const services = [
    {
        id: 'services-1',
        title: 'eCommerce Photo Editing',
        simple: 0.5,
        medium: 1.0,
        complex: 1.5,
        superComplex: 2.0,
    },
    {
        id: 'services-2',
        title: 'Clipping Path Service',
        simple: 0.4,
        medium: 0.8,
        complex: 1.2,
        superComplex: 1.6,
    },
    {
        id: 'services-5',
        title: 'Photo Retouching Service',
        simple: 0.8,
        medium: 1.4,
        complex: 2.0,
        superComplex: 2.5,
    },
    {
        id: 'services-3',
        title: 'Image Masking Service',
        simple: 0.6,
        medium: 1.1,
        complex: 1.7,
        superComplex: 2.1,
    },
    {
        id: 'services-4',
        title: 'Shadow Creation Service',
        simple: 0.3,
        medium: 0.7,
        complex: 1.3,
        superComplex: 1.9,
    },
    {
        id: 'services-6',
        title: 'Ghost Mannequin Service',
        simple: 0.9,
        medium: 1.5,
        complex: 2.1,
        superComplex: 2.8,
    },
    {
        id: 'services-7',
        title: 'Color Correction Service',
        simple: 0.45,
        medium: 0.95,
        complex: 1.45,
        superComplex: 2.0,
    },
    {
        id: 'services-8',
        title: 'Background Editing Service',
        simple: 0.45,
        medium: 0.95,
        complex: 1.45,
        superComplex: 2.0,
    },
    {
        id: 'services-9',
        title: 'Raster To Vector',
        simple: 0.45,
        medium: 0.95,
        complex: 1.45,
        superComplex: 2.0,
    },
];

export default function Pricing() {
    const [showAll, setShowAll] = useState(false);
    const displayedServices = showAll ? services : services.slice(0, 3);

    return (
        <section className="padding-x padding-y bg-gray-100" id="pricing">
            <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
                <div className="text-center">
                    <Badge variant="outline" className="mb-6">
                        Latest Updates
                    </Badge>
                    <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl font-amulya">
                        Pricing
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {displayedServices.map((service, index) => (
                        <Card
                            key={index}
                            className="flex w-80 flex-col justify-between text-left"
                        >
                            <CardHeader>
                                <CardTitle className="font-amulya text-lg">
                                    <p>{service.title}</p>
                                </CardTitle>

                                <p className="text-sm text-muted-foreground">
                                    Starting from
                                </p>
                                <span className="text-4xl font-bold font-amulya">
                                    $0.49
                                </span>
                                <p className="text-muted-foreground">
                                    Per Image
                                </p>
                            </CardHeader>
                            <CardContent>
                                <Separator className="mb-6" />
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-2">
                                        <CircleCheck className="size-5 text-primary" />
                                        <span>
                                            Simple: ${service.simple.toFixed(2)}
                                            /Images
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CircleCheck className="size-5 text-primary" />
                                        <span>
                                            Medium: ${service.medium.toFixed(2)}
                                            /Images
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CircleCheck className="size-5 text-primary" />
                                        <span>
                                            Complex: $
                                            {service.complex.toFixed(2)}/Images
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CircleCheck className="size-5 text-primary" />
                                        <span>
                                            Super Complex: $
                                            {service.superComplex.toFixed(2)}
                                            /Images
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Contact className="w-full" icon={false} />
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div>
                    <Button
                        variant="outline"
                        size={'lg'}
                        className="cursor-pointer"
                        onClick={() => setShowAll((prev) => !prev)}
                    >
                        {showAll ? 'See Less' : 'See More'}
                    </Button>
                </div>
            </div>
        </section>
    );
}
