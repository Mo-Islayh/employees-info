import deleteImg from "./delete.svg"
import editImg from "./edit.svg"
import searchImg from "./search.svg"
import add_person from "./add_person.svg"
import close from "./close.svg"
import arrow_back from "./arrow_back.svg"

const Icon = ({ img }) => {
  return <img src={img} width={20} alt="icon-img" />
}

export const DeleteIcon = () => {
  return <Icon img={deleteImg} />
}
export const SearchIcon = () => {
  return <Icon img={searchImg} />
}
export const EditIcon = () => {
  return <Icon img={editImg} />
}
export const AddPersonIcon = () => {
  return <Icon img={add_person} />
}
export const CloseIcon = () => {
  return <Icon img={close} />
}
export const ArrowBackIcon = () => {
  return <Icon img={arrow_back} />
}
