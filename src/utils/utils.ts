import toast from "react-hot-toast"

export const copyToClipBoard = (data : string , toasted : boolean = true) => {
  try {
    navigator.clipboard.writeText(data)

    if (toasted) {
      toast.success("copy.success" , {
        position : 'bottom-left',
        duration : 1000,
        style : {
          scale : .85
        }
      })
    }
  } catch (error) {
    toast.error("copy.error" , {
      position : 'bottom-left',
      duration : 1000,
    })
  }
}