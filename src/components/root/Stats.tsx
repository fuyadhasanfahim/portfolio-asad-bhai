import { NumberTicker } from '../ui/number-ticker';

const stats = [
    {
        id: 'stat-1',
        value: 14,
        status: '+',
        label: 'Years of experience',
    },
    {
        id: 'stat-2',
        value: 60,
        status: 'K+',
        label: 'Jobs done successfully',
    },
    {
        id: 'stat-3',
        value: 10,
        status: 'M+',
        label: 'Images processed',
    },
    {
        id: 'stat-4',
        value: 5,
        status: 'K+',
        label: 'Worldwide client',
    },
];

export default function Stats() {
    return (
        <section className="padding-x padding-y bg-gray-100">
            <div className="container">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold md:text-4xl font-amulya">
                        Platform performance insights
                    </h2>
                    <p>Ensuring stability and scalability for all users</p>
                </div>
                <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col gap-4 items-center"
                        >
                            <div className="text-6xl">
                                <NumberTicker
                                    value={stat.value}
                                    className="text-6xl font-amulya"
                                />
                                {stat.status}
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
