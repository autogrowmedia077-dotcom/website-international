import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { XCircle } from 'lucide-react';
import { useLocation } from 'wouter';

const PaymentFailure: React.FC = () => {
    const [, setLocation] = useLocation();

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl"
            >
                <Card className="glass-card p-8 sm:p-12 text-center glow-primary border-red-500/20">
                    <CardContent className="p-0">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                            className="mx-auto mb-6"
                        >
                            <XCircle className="w-24 h-24 text-red-400 mx-auto" />
                        </motion.div>
                        <h1 className="text-4xl sm:text-5xl font-black text-gradient mb-6">
                            Payment Failed
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                            We couldn't process your payment. Please try again or use a different payment method.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => setLocation('/')}
                                className="gradient-primary text-white px-8 py-3 text-lg font-bold hover-glow transform transition-all duration-300 hover:scale-105"
                            >
                                Try Again
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.open('mailto:support@pinnacleplus.in')}
                                className="px-8 py-3 text-lg font-bold"
                            >
                                Contact Support
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default PaymentFailure;
