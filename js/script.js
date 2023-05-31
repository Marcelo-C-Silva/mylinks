const linkButton = document.querySelectorAll(".icons");

linkButton.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const getLink = e.target.parentElement.getAttribute("href");
    const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);

    Swal.fire({
        title: 'Muito Bem! <br> Você copiou o link.',
        text: 'Referencia para poucos.',
        imageUrl: 'https://media.discordapp.net/attachments/874387729440444427/1113531019077898351/kakashi.gif',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
  })
})
