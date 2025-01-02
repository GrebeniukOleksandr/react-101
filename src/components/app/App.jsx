import userData from '../../userData.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import friends from '../../friends.json';
import TrensactionHistory from '../TrensactionHistory/TrensactionHistory';
import transactions from '../../transactions.json';

export default function App () {
    return (
        <> 
            <Profile profile={userData}/>
            <FriendList friends={friends}/>
            <TrensactionHistory transactions={transactions} />
        </>
    )
};
