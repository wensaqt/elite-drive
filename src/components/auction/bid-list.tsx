import React from "react";
import { BitcoinIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Divider from "../ui/divider";
import TypographyLarge from "../typography/large";
import { TypographyLead } from "../typography/lead";
import { Button } from "../ui/button";
import { TypographyH2 } from "../typography/h2";

interface Bidder {
    username: string;
    amount: number;
    date: string;
    message: string;
}

const mockedBidders: Bidder[] = [
    {
        username: "@johnsmith",
        amount: 1.7,
        date: "2023-04-15",
        message: "i need this car its for me !!!",
    },
    {
        username: "@alice_wonder",
        amount: 1.665,
        date: "2023-04-16",
        message: "spare your money lads because im taking this with me",
    },
    {
        username: "@crypto_king",
        amount: 1.545,
        date: "2023-04-17",
        message: "f**k you john stop hitting the bid everytime you log in",
    },
    {
        username: "@bidmaster",
        amount: 1.3,
        date: "2023-04-14",
        message: "this car is insane! cant wait to see it in action :)",
    },
    {
        username: "@nft_lover",
        amount: 1.25,
        date: "2023-04-18",
        message: "good luck to everyone",
    },
];

const BidList: React.FC = () => {
    const sortedBidders = [...mockedBidders].sort(
        (a, b) => b.amount - a.amount
    );

    return (
        <section className="px-4 py-6 md:px-6 md:py-12">
            <div className="mx-auto max-w-4xl">
                <div className="mb-6 grid gap-2">
                    <TypographyH2 text="All bidders" />

                    <p className="text-muted-foreground"></p>
                </div>
                <ul className="grid">
                    {sortedBidders.map((bidder, index) => (
                        <React.Fragment key={bidder.username}>
                            <li className="grid gap-2 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8 border">
                                            <AvatarImage
                                                src="/placeholder-user.jpg"
                                                alt={bidder.username}
                                            />
                                            <AvatarFallback>
                                                {bidder.username
                                                    .slice(1, 3)
                                                    .toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-0.5">
                                            <TypographyLead
                                                text={bidder.username}
                                            />
                                            <p className="text-xs text-muted-foreground">
                                                {bidder.date}
                                            </p>
                                        </div>
                                    </div>
                                    <TypographyLarge
                                        text={`${bidder.amount} BTC`}
                                        icon={<BitcoinIcon />}
                                        iconSize={18}
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {`"${bidder.message}"`}
                                </p>
                            </li>
                            {index < sortedBidders.length - 1 && (
                                <Divider
                                    fading="none"
                                    opacity="low"
                                    weight="light"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </ul>
                <div className="mt-8 flex justify-center">
                    <Button variant="outline">See more...</Button>
                </div>
            </div>
        </section>
    );
};

export default BidList;
