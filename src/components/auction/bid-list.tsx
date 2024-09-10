import React from "react";
import { BitcoinIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import TypographyH3 from "../typography/h3";
import { TypographyLead } from "../typography/lead";
import TypographyMuted from "../typography/muted";
import Divider from "../ui/divider";
import TypographyLarge from "../typography/large";

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
        <div className="text-foreground p-6 rounded-lg shadow-lg w-full lg:w-2/3">
            <TypographyH3 text="Bidders on this car" />
            <div className="grid gap-4 mt-6">
                {mockedBidders.map((bidder, index) => (
                    <div key={index}>
                        {/* Contenu de chaque bidder */}
                        <div className="flex items-center gap-4 rounded-md">
                            <Avatar className="w-10 h-10 border-2 border-primary">
                                <AvatarImage
                                    src="/placeholder-user.jpg"
                                    alt={bidder.username}
                                />
                                <AvatarFallback>
                                    {bidder.username.slice(1, 3).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 grid gap-1">
                                <div className="flex items-center justify-between">
                                    <TypographyLead text={bidder.username} />
                                    <TypographyLarge
                                        text={String(bidder.amount)}
                                        icon={<BitcoinIcon color="white" />}
                                        iconSize={16}
                                    />
                                </div>
                                <TypographyMuted text={`"${bidder.message}"`} />
                            </div>
                        </div>

                        {index < mockedBidders.length - 1 && (
                            <Divider opacity="half" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BidList;
