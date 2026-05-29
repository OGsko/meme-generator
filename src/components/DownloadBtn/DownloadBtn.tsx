import html2canvas from "html2canvas"

const DownloadBtn = () => {

    function saveMeme () {
        const element = document.querySelector(".meme") as HTMLDivElement

        html2canvas(element).then((canvas) => {

            const link = document.createElement("a")

            link.download = "meme.png"

            link.href = canvas.toDataURL()

            link.click()
        })
    }

    return (
        <button onClick={saveMeme}>Ladda ner</button>
    )
}


export default DownloadBtn