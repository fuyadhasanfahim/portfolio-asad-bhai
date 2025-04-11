interface Stats8Props {
    heading?: string;
    description?: string;
    link?: {
        text: string;
        url: string;
    };
    stats?: Array<{
        id: string;
        value: string;
        label: string;
    }>;
}

export default function Stats({
    heading = 'Platform performance insights',
    description = 'Ensuring stability and scalability for all users',
    stats = [
        {
            id: 'stat-1',
            value: '10+',
            label: 'Years of experience',
        },
        {
            id: 'stat-2',
            value: '+3.5k',
            label: 'Jobs done successfully',
        },
        {
            id: 'stat-3',
            value: '+8m',
            label: 'Images processed',
        },
        {
            id: 'stat-4',
            value: '+1.5k',
            label: 'Worldwide client',
        },
    ],
}: Stats8Props) {
    return (
        <section className="padding-x padding-y bg-gray-100">
            <div className="container">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold md:text-4xl font-amulya">
                        {heading}
                    </h2>
                    <p>{description}</p>
                </div>
                <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col gap-4 items-center"
                        >
                            <div className="text-6xl font-amulya">
                                {stat.value}
                            </div>
                            <p className="text-base text-center md:text-lg">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
