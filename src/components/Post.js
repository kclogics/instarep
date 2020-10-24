import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faComment} from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

import '../styles/PostStyles.css'

const Post = (props) => {
            return( 
            <div className="PostContainer">
               <div className="header"></div>
               <div className="header image"></div>
               <div className="bookmark">              
                       <FontAwesomeIcon className="interIcon"  icon={faHeart} />  
                       <FontAwesomeIcon className="interIcon"  icon={faComment} />
                       <FontAwesomeIcon className="interIcon"  icon={faPaperPlane} />
                       <FontAwesomeIcon className="interIcon bookmarkIcon" icon={faBookmark} />
                   </div>
               <div className="footer">
                   <div>1000 views</div>
                     <div>
                      thekrishnachavali Hey everyone! It's been a while, 
                      but I'm back online. I took a much needed social media 
                      break for a few months, and it was AWESOME. 
                      Highly recommend that for any of you. 
                      I just feel like my head is much clearer 😂
                     </div>
                     <div>View all 32 comments</div>
                     <div>9 HOURS AGO</div>
               </div>
               <input className="header comment" placeholder="Add a comment"/>
            </div>
            )
}

export default Post;