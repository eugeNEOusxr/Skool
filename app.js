window.addEventListener('load', async () => {
    // Modern dapp browsers
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to Web3');
        } catch (error) {
            console.error('User denied account access');
        }
    } 
    // Legacy dapp browsers
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    } 
    else {
        alert('Non-Ethereum browser detected. Consider using MetaMask!');
    }

    // Example data for Neoverse connections
    const connections = [
        { name: "Neo", type: "AI Avatar", description: "Main AI orchestrator." },
        { name: "Neomi", type: "AI Avatar", description: "Assistant AI for automation." },
        { name: "Zoriah", type: "VR Teacher", description: "Guides students in Python lessons." },
        { name: "Magic Book", type: "Artifact", description: "Interactive learning object." },
        { name: "EugeNEOusXR", type: "VR Sandbox", description: "Immersive 3D learning environment." }
    ];

    const container = document.getElementById('connection-container');
    connections.forEach(conn => {
        const div = document.createElement('div');
        div.className = 'connection';
        div.innerHTML = `<h3>${conn.name}</h3><p><strong>Type:</strong> ${conn.type}</p><p>${conn.description}</p>`;
        container.appendChild(div);
    });
});
