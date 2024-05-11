import { run } from "hardhat";
import { TASK_VERIFY_VERIFY } from '@nomicfoundation/hardhat-verify/internal/task-names';

async function main() {

    console.log("Verifying contract...");
    try {
        await run(TASK_VERIFY_VERIFY, {
            address: "0x4728De1Bd7887F5ef332fa6BB6DC0D7eD6aA344f",
            constructorArguments: [
                "Fried Chicken",
                "FC",
                "0x3aE511AB22716afbB4acC7fEf5B39D2B38c870BF", 
                [ "115792089237316195423570985008687907853269984665640564039457584007913129639935", "100" ],
                [ "0", "1000000000000000" ],
                [
                    "ipfs://QmZiDsySVEAmV6XPETwzTbDZuVyr4Mc9CZbjj7S5WXv5MF",
                    "ipfs://QmZiDsySVEAmV6XPETwzTbDZuVyr4Mc9CZbjj7S5WXv5MF"
                ]
            ],
        });
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!");
        } else {
            console.log(e);
        }
    }
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});