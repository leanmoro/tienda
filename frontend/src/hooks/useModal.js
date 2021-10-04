import {useState} from 'react'

export const useModal = (initialMode = false) => {
   const [isOpened, setisOpened] = useState(initialMode);
   const toggle = () => setisOpened(!isOpened)
   return [isOpened, setisOpened, toggle]
};