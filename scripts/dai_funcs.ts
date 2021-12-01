import {deployments, ethers, getNamedAccounts, network} from 'hardhat';
import {Greeter} from "../typechain";
import {daiAddress_Kovan, fooAmount, initialApprove} from "../helpers/constants";
import {parseEther} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();
    if (await network.name === 'kovan') {
        const Dai = await ethers.getContractAt('IERC20',daiAddress_Kovan);
        const MyDefiProject = await ethers.getContract('MyDefiProject');

        // await Dai.approve(MyDefiProject.address,parseEther(initialApprove));
        await MyDefiProject.foo(ethers.constants.AddressZero,parseEther(fooAmount));
    };

    // const Greeter = await ethers.getContract<Greeter>('Greeter');
    // console.log(`Greeter.greet(): ${await Greeter.greet()}`);
    //
    // await Greeter.setGreeting('A New Greeting');
    // console.log(`Greeter.greet(): ${await Greeter.greet()}`);

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
