import {deployments, ethers, getNamedAccounts, network} from 'hardhat';
import {Greeter, MyDefiProject} from "../typechain";
import {bat_kovan, comp_kovan, dai_Kovan, fooAmount, initialApprove} from "../helpers/constants";
import {parseEther} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();
    //S1: transfer Dai to another address using MyDefiProject
    // if (await network.name === 'kovan') {
    //     const Dai = await ethers.getContractAt('IERC20',dai_Kovan);
    //     const MyDefiProject = await ethers.getContract('MyDefiProject');
    //
    //     // await Dai.approve(MyDefiProject.address,parseEther(initialApprove)); //step 1
    //     await MyDefiProject.foo(ethers.constants.AddressZero,parseEther(fooAmount));
    // };

    //#s2 using myDefiProject.setTokenAddress(bat_kovan);
    // if (await network.name === 'kovan') {
    //     const BAT = await ethers.getContractAt('IERC20', bat_kovan);
    //     const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');
    //
    //     // await MyDefiProject.setTokenAddress(BAT.address);
    //     // await BAT.approve(MyDefiProject.address, parseEther(initialApprove)); //step 1
    //     await MyDefiProject.foo(ethers.constants.AddressZero, parseEther(fooAmount));
    // }

    //s3: for cusdc
    if (await network.name === 'kovan') {
        const Comp = await ethers.getContractAt('IERC20', comp_kovan);
        const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');

        // await MyDefiProject.setTokenAddress(Comp.address);
        // await Comp.approve(MyDefiProject.address, parseEther(initialApprove)); //step 1
        await MyDefiProject.foo(ethers.constants.AddressZero, parseEther(fooAmount));
    }
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
