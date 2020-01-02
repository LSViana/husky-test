const profile = require('./profile.json');

// Validating profile
{
    const requiredProfileProperties = [ 'name', 'age', 'nationality' ];
    const hasAllRequiredProperties = Object.keys(profile).filter(x => requiredProfileProperties.indexOf(x) !== -1).length === requiredProfileProperties.length;
    if(!hasAllRequiredProperties) {
        console.error('Profile doesn\'t have all required properties: ' + requiredProfileProperties.join(', '));
        return 1;
    } else {
        console.log('Profile has all required properties');
        return 0;
    }
}
