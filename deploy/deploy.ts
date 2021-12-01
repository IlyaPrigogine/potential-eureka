import {DeployFunction} from 'hardhat-deploy/types';
import {daiAddress_Kovan} from "../helpers/constants";


const func: DeployFunction = async function ({deployments, getNamedAccounts, network, getChainId}) {
    const {deploy} = deployments;
    const {owner} = await getNamedAccounts();

    console.log('chainId:', await getChainId());

    if (network.name == 'kovan') {
        await deploy('MyDefiProject', {
            from: owner,
            args: [daiAddress_Kovan],
            log: true,
        })
    }

};
export default func;
func.tags = ['Greeter'];
