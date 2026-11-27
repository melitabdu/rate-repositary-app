
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }

  return count.toString();
};

const RepositoryStats = ({ item }) => {
  return (
    <View style={styles.stats}>
      <View style={styles.stat}>
        <Text fontWeight="bold">
          {formatCount(item.stargazersCount)}
        </Text>
        <Text color="textSecondary" style={styles.statLabel}>
          Stars
        </Text>
      </View>

      <View style={styles.stat}>
        <Text fontWeight="bold">
          {formatCount(item.forksCount)}
        </Text>
        <Text color="textSecondary" style={styles.statLabel}>
          Forks
        </Text>
      </View>

      <View style={styles.stat}>
        <Text fontWeight="bold">
          {item.reviewCount}
        </Text>
        <Text color="textSecondary" style={styles.statLabel}>
          Reviews
        </Text>
      </View>

      <View style={styles.stat}>
        <Text fontWeight="bold">
          {item.ratingAverage}
        </Text>
        <Text color="textSecondary" style={styles.statLabel}>
          Rating
        </Text>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />

        <View style={styles.repositoryInfo}>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            numberOfLines={1}
          >
            {item.fullName}
          </Text>

          <Text
            color="textSecondary"
            style={styles.description}
            numberOfLines={1}
          >
            {item.description}
          </Text>

          <Text style={styles.language}>
            {item.language}
          </Text>
        </View>
      </View>

      <RepositoryStats item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 5,
    marginRight: 12,
  },

  repositoryInfo: {
    flex: 1,
  },

  description: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
  },

  language: {
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  statLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default RepositoryItem;
