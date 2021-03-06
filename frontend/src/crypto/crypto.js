import { ethers } from "ethers";
import { contractData } from "./CrowdfundedVoter";

const contractAddress = "0xE08175cB86F4b7E1fD0631F97bb0a59580Bd61A8";
const weiPrice = 1000000000000;
const weiLimit = 900000;

export const checkBrowserWallet = async () => {
    if (!window.ethereum){
        return false;
    }

    let prov = new ethers.providers.Web3Provider(window.ethereum);
    let account = await prov.listAccounts();
    if (!account) {
        return false
    }

    return true;
}

export const getProvider = async () => {
    let b = await checkBrowserWallet();
    if (!b) {
        return;
    }

    return new ethers.providers.Web3Provider(window.ethereum);
}

export const getSigner = async (provider) => {
    let b = await checkBrowserWallet();
    if (!b) {
        return;
    }

    return provider.getSigner();
}

export const getReadOnlyContract = (provider) => {
    return new ethers.Contract(contractAddress, contractData.abi, provider);
}

export const getReadWriteContract = (signer) => {
    return new ethers.Contract(contractAddress, contractData.abi, signer);
}

export const getAccount = async (provider) => {
    let accounts = await provider.listAccounts();
    return accounts[0];
}

export const getAllCampaigns = async (contract) => {
    let count = await getCampaignsCount(contract);
    let campaigns = [];
    for (let i = 0; i < count; i++) {
        let c = await getCampaignMetadata(contract, i);
        campaigns.push(c);
    }
    return campaigns;
}

export const getCampaignsCount = async (contract) => {
    let campaignsCount = await contract.getCampaignsCount();
    return campaignsCount;
}

export const getCampaignMetadata = async (contract, id) => {
    let campaign = await contract.getCampaignMetadata(id);
    return campaign;
}

export const createCampaign = async (contract, voteOptionsArr, campaignArr) => {
    if (!voteOptionsArr || !campaignArr){
        console.log("bad data", voteOptionsArr, campaignArr)
        return;
    }

    return await contract.createCampaign(voteOptionsArr, campaignArr);
}

export const claim = async (contract, id) => {
    let res = await contract.claim(id, { gasPrice: weiPrice, gasLimit: weiLimit });
    return res;
}

export const voteAndBack = async (contract, id, voteOpt, eth) => {
    let res = await contract.voteAndBack(id, voteOpt, { gasPrice: weiPrice, gasLimit: weiLimit, value: ethers.utils.parseEther(eth)});
    return res;
}

export const convertEthToGWei = (ETH) => {
    return (ethers.utils.parseEther(ETH))/1000000000;
}

export const convertGWeiToEth = (GWei) => {
    return ethers.utils.formatEther((GWei * 1000000000).toString()); // Uses Big number?
}

// Examples:

// getProvider().then((prov) => {
//     getAccount(prov).then((d) => {console.log(d)});
//     let cont = getReadOnlyContract(prov);
//     getAllCampaigns(cont).then((res) => {console.log(res)});
//     getCampaignsCount(cont).then((res) => {console.log(res.toString())});
//     getCampaignMetadata(cont, 3).then(res => {console.log(res)})

//     getSigner(prov).then((s) => {
//         let contRW = getReadWriteContract(s);
//         voteAndBack(contRW, 0, 0, "0.000001").then(res=>console.log(res));
//         claim(contRW, 0).then(res=>console.log(res));
//         let d = {voteOptionsAmount: 2, title: "Get Darth Vader a new face", description: "You know the deal, I lost my face. Please help me by backing me during this project. You can help me choose the type of nose I have!", goalInGWei: 11036459883, currentFundingInGWei: 0, keywords: ["darth", "vader"], endDateTime: 1643506711, picURL: "https://lumiere-a.akamaihd.net/v1/images/607598d0230e6a00018e21b2-image_354b1b56.jpeg?region=0%2C48%2C1536%2C768&width=960", creator: "0x0000000000000000000000000000000000000000"};
//         createCampaign(contRW, [{title: "Big nose", votes: 0}, {title: "Small nose", votes: 0}], d).then(() => {console.log("done creating?")})
//     });
// });