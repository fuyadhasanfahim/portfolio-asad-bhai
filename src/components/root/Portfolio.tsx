'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const posts = [
    {
        id: 'portfolio-1',
        title: 'eCommerce Photo Editing Service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'portfolio-2',
        title: 'Clipping Path Service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'portfolio-3',
        title: 'Image Masking Service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'portfolio-4',
        title: 'Shadow Creation Service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'portfolio-5',
        title: 'Photo Retouching Service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'portfolio-6',
        title: 'Ghost Mannequin Service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'portfolio-7',
        title: 'Color Correction Service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
];

export default function Portfolio() {
    const [showAll, setShowAll] = useState(false);
    const displayedPosts = showAll ? posts : posts.slice(0, 3);

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
                    {displayedPosts.map((post) => (
                        <Card key={post.id}>
                            <CardContent>
                                <figure className="relative transition-opacity duration-200 fade-in hover:opacity-70">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={300}
                                        className="rounded-md"
                                    />
                                </figure>
                            </CardContent>
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
