import commentStyle from './Comment.module.css'


const Comment = ({
  replies,
  setReplies
}) => {


    return ( 
        <>
          <div className={commentStyle.comment}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis condimentum neque. Maecenas justo velit, congue at pellentesque at, mollis vel erat. Fusce tristique libero sed mollis mollis. Phasellus a maximus neque. Fusce nec suscipit lorem. Donec aliquam iaculis purus, at interdum augue sollicitudin eu. Nam iaculis, quam nec accumsan congue, nulla mauris efficitur nisi, sit amet auctor mi lacus nec ante. Morbi at urna posuere, accumsan justo ut, rhoncus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas consectetur quis felis vel accumsan. Duis mi est, varius vel viverra et, gravida non nulla.</p>
          </div>
          {}
        </>
     );
}
 
export default Comment;