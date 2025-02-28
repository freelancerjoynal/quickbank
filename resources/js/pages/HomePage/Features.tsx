import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { fadeIn } from "@/lib/Animations";

export default function Features() {
    const features = [
        { title: 'Fixed Deposit', icon: '💰', description: 'Enjoy higher returns with secure and guaranteed growth.' },
        { title: 'Savings Account', icon: '🏦', description: 'Earn interest on your savings with flexible withdrawal options.' },
        { title: 'Loan Services', icon: '📄', description: 'Get quick and easy loans with competitive interest rates.' },
        { title: 'Credit Cards', icon: '💳', description: 'Unlock exclusive rewards, cashback, and flexible credit limits.' },
        { title: 'Online Banking', icon: '🌐', description: 'Manage your accounts securely anytime, anywhere with digital banking.' },
        { title: 'Wealth Management', icon: '📈', description: 'Grow your wealth with expert financial planning and investment solutions.' },
        { title: 'Business Banking', icon: '🏢', description: 'Tailored financial solutions to support your business growth and operations.' },
        { title: 'Insurance Services', icon: '🛡️', description: 'Protect yourself and your family with comprehensive insurance plans.' },
    ];

    return (
        <motion.section
        className="py-20 select-none"
        {...fadeIn}
        >
            <div className="container mx-auto">
                <h6 className="text-center font-bold uppercase lg:text-xl">Custom Banking</h6>
                <h3 className="py-2 text-center text-2xl font-bold uppercase lg:text-6xl">Banking For Your Needs</h3>

                <div className="relative m-auto max-w-5xl">
                    <Carousel className="relative">
                        <CarouselContent className="mt-10">
                            {features.map((item, index) => (
                                <CarouselItem key={index} className="max-w-[80%] lg:basis-1/3">
                                    <motion.div
                                        className="rounded-xl border p-3 text-center select-none"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                                    >
                                        <span className="text-7xl">{item.icon}</span>
                                        <h5 className="py-2 text-xl font-bold uppercase">{item.title}</h5>
                                        <p>{item.description}</p>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Arrow Buttons */}
                        <div className='hidden last:block'>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
        </motion.section>
    );
}
