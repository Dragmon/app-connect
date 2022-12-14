<View>
    <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Notificaciones')}>
        <Image
            style={styles.homeBlock}
            source={require('../Img/Body/notificacioneseditados2.jpg')}
        />
    </TouchableHighlight>
    <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('PlanComercial')}>
        <Image
            style={styles.homeBlock}
            source={require('../Img/Body/planco-plecaeditados2.jpg')}
        />
    </TouchableHighlight>
    <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Newsletter')}>
        <Image
            style={styles.homeBlock}
            source={require('../Img/Body/herramientaseditados2.jpg')}
        />
    </TouchableHighlight>
    {/*Menu de bloques*/}
    {/*Hot-Results*/}
    <View style={styles.horizontalHomeBlock}>
        <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Ibooks')}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#F5AB2D'}]}>
                <View style={styles.imageContentSection}>
                    <Image
                        source={require('../Img/Body/Icons/hotresults.png')}
                    />
                </View>
            </View>
        </TouchableHighlight>
        {/*Calendarios*/}
        <TouchableHighlight underlayColor="#4883C4" onPress={() => navigate('Calendario')}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#4883C4'}]}>
                <View style={styles.imageContentSection}>
                    <Image
                        source={require('../Img/Body/Icons/calendario-text.png')}
                    />
                </View>
            </View>
        </TouchableHighlight >
        {/*Videos*/}
        <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('Videos')}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#2F284B'}]}>
                <View style={styles.imageContentSection}>
                    <Image
                        source={require('../Img/Body/Icons/videos-text.png')}
                    />
                </View>
            </View>
        </TouchableHighlight>
    </View>
    <View style={styles.horizontalHomeBlock}>
        {/* Networks */}
        <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Networks')}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#631158'}]}>
                <View style={styles.imageContentSection}>
                    <Image
                        source={require('../Img/Body/Icons/networks-text.png')}
                    />
                </View>
            </View>
        </TouchableHighlight>
        {/* Regional */}
        <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('Regional')}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#e74655'}]}>
                <View style={styles.imageContentSection}>
                    <Image
                        source={require('../Img/Body/Icons/icon-regional.png')}
                    />
                </View>
            </View>
        </TouchableHighlight>
        {/* Parrillas */}
        <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('Parrillas')}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#F5AB2D'}]}>
                <View style={styles.imageContentSection}>
                    <Image
                        source={require('../Img/Body/Icons/icon-parrllas.png')}
                    />
                </View>
            </View>
        </TouchableHighlight>
    </View>
    <View style={styles.horizontalHomeBlockEnd}>
        {/* Presentaciones */}
        <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Presentaciones')}>
            <View style={[styles.horizontalImageSectionEnd, {backgroundColor: '#2F284B'}]}>
                <View style={styles.imageContentSection}>
                    <Image
                        source={require('../Img/Body/Icons/presentaciones.png')}
                    />
                </View>
            </View>
        </TouchableHighlight>
        {/* Catalogos */}
        <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Catalogos')}>
            <View style={[styles.horizontalImageSectionEnd, {backgroundColor: '#3581BC'}]}>
                <View style={styles.imageContentSection}>
                    <Image
                        source={require('../Img/Body/Icons/catalogos.png')}
                    />
                </View>
            </View>
        </TouchableHighlight>
    </View>
</View>