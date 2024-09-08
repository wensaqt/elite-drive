import React from "react";
import { BitcoinIcon, TrophyIcon, UserIcon } from "lucide-react";
import TypographyH3 from "../typography/h3";
import TypographyMuted from "../typography/muted";
import Divider from "../ui/divider";
import TypographyLarge from "../typography/large";

interface Bidder {
    username: string;
    amount: number;
    date: string;
}

const mockedBidders: Bidder[] = [
    { username: "@johnsmith", amount: 1.7, date: "2023-04-15" },
    { username: "@alice_wonder", amount: 1.665, date: "2023-04-16" },
    { username: "@crypto_king", amount: 1.545, date: "2023-04-17" },
    { username: "@bidmaster", amount: 1.3, date: "2023-04-14" },
    { username: "@nft_lover", amount: 1.25, date: "2023-04-18" },
];

const BidList: React.FC = () => {
    const sortedBidders = [...mockedBidders].sort(
        (a, b) => b.amount - a.amount
    );

    return (
        <ul className="space-y-2 w-full">
            {sortedBidders.map((bidder, index) => (
                <React.Fragment key={bidder.username}>
                    <li className="flex items-center w-full">
                        <div className="flex items-center w-full gap-4">
                            {index === 0 ? (
                                <TrophyIcon color="gold" />
                            ) : (
                                <UserIcon color="white" />
                            )}

                            <div className="flex flex-grow gap-10">
                                <TypographyLarge text={bidder.username} />
                                <div className="flex">
                                    <TypographyLarge
                                        text={bidder.amount.toString()}
                                        icon={<BitcoinIcon />}
                                        iconSize={18}
                                    />
                                </div>

                                <TypographyMuted text={bidder.date} />
                            </div>
                        </div>
                    </li>
                    {index < sortedBidders.length - 1 && (
                        <Divider fading="none" opacity="low" weight="light" />
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
};

export default BidList;
