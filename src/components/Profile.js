import '../css/Profile.css'

export const Profile = ({data}) => {

    return (
        <div className="profile">
            <h3>Profile</h3>
            <div className="userProfile">
                <div className="profileImg">
                    {<img style={{height:'200px',width:'200px'}} src={ data.avatarImage} alt='Logo'/>}
                </div>
                <div className="profileData">
                    <table>
                        <tbody>
                            <tr>
                                <td className="item-label">First Name</td>
                                <td className="item-data">{data.firstName}</td>
                            </tr>
                            <tr>
                                <td className="item-label">Last Name</td>
                                <td className="item-data">{data.lastName}</td>
                            </tr>
                            <tr>
                                <td className="item-label">Phone</td>
                                <td className="item-data">{data.phone}</td>
                            </tr>
                            <tr>
                                <td className="item-label">Email</td>
                                <td className="item-data">{data.email}</td>
                            </tr>
                            <tr>
                                <td className="item-label">Bio</td>
                                <td className="item-data">{data.bio}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
}