import {deployments, ethers, getNamedAccounts, network} from 'hardhat';
import {Greeter} from "../typechain";
import {daiAddress_Kovan, fooAmount, initialApprove} from "../helpers/constants";
import {parseEther} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();
    //S1: transfer Dai to another address using MyDefiProject
    if (await network.name === 'kovan') {
        const Dai = await ethers.getContractAt('IERC20',daiAddress_Kovan);
        const MyDefiProject = await ethers.getContract('MyDefiProject');

        // await Dai.approve(MyDefiProject.address,parseEther(initialApprove)); //step 1
        await MyDefiProject.foo(ethers.constants.AddressZero,parseEther(fooAmount));
    };
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
