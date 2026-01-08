document.getElementById('toggle').addEventListener('click', () => {
  const btn = document.getElementById('toggle');
  const statusText = document.getElementById('vpn-status');
  
  if (btn.innerText === "Enable Protection") {
    btn.innerText = "Shield Active";
    btn.classList.add('pulse');
    statusText.innerText = "VPN: Connected (Simulated)";
    statusText.style.color = "#00ff88";
  } else {
    btn.innerText = "Enable Protection";
    btn.classList.remove('pulse');
    statusText.innerText = "VPN: Disconnected";
    statusText.style.color = "white";
  }
});
